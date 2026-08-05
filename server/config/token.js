import jwt from "jsonwebtoken"

const genToken = (userId) => {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not set in environment')
    }
    try {
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" })
        return token
    } catch (error) {
        // rethrow so callers can handle
        throw error
    }
}

export default genToken