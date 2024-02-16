export const authConfig = {
  providers:[],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isProtectedRoute = request.nextUrl.pathname.startsWith("/dashboard") ||
                               request.nextUrl.pathname.startsWith("/profile") ||
                               request.nextUrl.pathname.startsWith("/products");
      
      return !isProtectedRoute || isLoggedIn;
    },
  },
};

