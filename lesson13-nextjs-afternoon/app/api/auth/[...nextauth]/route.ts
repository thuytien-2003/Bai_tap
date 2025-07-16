import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const res = await fetch('https://server.aptech.io/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });
        const user = await res.json();

        if (user.access_token) {
          return { ...user, access_token: user.access_token };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt', // Sử dụng JWT cho session
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.access_token = user.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.access_token = token.access_token;
      return session;
    },
  },
  pages: {
    signIn: '/login', // Chỉ định trang login
  },
});

export { handler as GET, handler as POST };
