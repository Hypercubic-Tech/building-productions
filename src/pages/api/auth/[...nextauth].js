import NextAuth from "next-auth";
import GoogleProvider from "../../../providers/GoogleProvider";
import FacebookProvider from "../../../providers/FacebookProvider";
import axios from "axios";

export default NextAuth({
  providers: [GoogleProvider, FacebookProvider],

  session: { strategy: "jwt" },

  callbacks: {
    async session({ session, token, user }) {
      session.jwt = token.jwt;
      session.id = token.id;
      return session;
    },

    async jwt({ token, user, account }) {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/auth/${account.provider}/callback?access_token=${account?.access_token}`,
            {
              params: {
                access_token: account?.access_token,
              },
            }
          );
          const data = response.data;
          token.jwt = data.jwt;
          token.id = data.user.id;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      return token;
    },
  },
});
