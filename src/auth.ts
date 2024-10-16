import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Credentials({
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			credentials: {
				username: {},
				password: {}
			},

			authorize: async (credentials) => {
				// let user = null;

				// logic to salt and hash password
				//   const pwHash = saltAndHashPassword(credentials.password)

				// logic to verify if the user exists
				//   user = await getUserFromDb(credentials.email, pwHash)

				const user = { id: 'hello', name: 'jay', password: 'dave' };
				if (!user || !user.password) {
					// No user found, so this is their first attempt to login
					// meaning this is also the place you could do registration
					throw new Error('User not found.');
				}

				const passwordsMatch = user.password === credentials?.password;

				if (passwordsMatch) return user;
				return null;
			}
		})
	],
	pages: {
		signIn: 'auth/login'
	}
});
