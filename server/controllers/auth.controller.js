import genToken from "../config/token.js"
import User from "../models/user.model.js"


export const googleAuth = async (req,res) => {
    try {
        const {name, email} = req.body || {}

        // Basic input validation
        if (!name || !email) {
            return res.status(400).json({ message: 'Name and email are required' })
        }
        // simple email regex
        const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' })
        }

        // Use an upsert to avoid a race condition between find and create
        const user = await User.findOneAndUpdate(
            { email },
            { $setOnInsert: { name, email } },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        )

        // Generate token (genToken should throw on failure)
        const token = await genToken(user._id)
        if (!token) {
            console.error('genToken returned falsy token for user:', user._id)
            return res.status(500).json({ message: 'Failed to generate auth token' })
        }

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json(user)



    } catch (error) {
        return res.status(500).json({message:`Google auth error ${error}`})
    }
    
}

export const logOut = async (req,res) => {
    try {
        await res.clearCookie("token")
        return res.status(200).json({message:"LogOut Successfully"})
    } catch (error) {
         return res.status(500).json({message:`Logout error ${error}`})
    }
    
}
