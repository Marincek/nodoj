interface UserDao {

    findByUsername: (username: String, cb: (error: Error, user: User) => void) => void

}