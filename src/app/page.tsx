import AuthStatus from "@/components/AuthStatus";
export default function Home() {
  return (
    <div className="p-4">
      <b>Welcome to JC Stack</b>
      <p>This will serve as a starting point for your next project or hack</p>
      <br />
      <div>Following are the packages installed with this starter pack</div>
      <ul className="list-inside list-disc">
        <li>Tailwindcss</li>
        <li>Framer Motion</li>
        <li>Recoil</li>
        <li>React Query</li>
        <li>
          Next Auth
          <ul className="list-inside list-disc pl-6">
            <li>
              Add a{" "}
              <code className="bg-gray-100 px-1 rounded-md">AUTH_SECRET</code>{" "}
              in .env to be used as a secret key
            </li>
            <li>
              Wrap your component with{" "}
              <code className="bg-gray-100 px-1 rounded-md">
                {"<ProtectedRoute>"}
              </code>{" "}
              to make it accessible only on session
            </li>
            <li>
              Similarly use{" "}
              <code className="bg-gray-100 px-1 rounded-md">
                {'<RoleRoute role="">'}
              </code>
              to make it accessible only on session and role
            </li>
            <li>
              Helper hooks are provided with the package to get session and role
              details
            </li>
            <li>
              Check{" "}
              <code className="bg-gray-100 px-1 rounded-md">
                {" "}
                /api/auth/[...nextauth]/route.ts{" "}
              </code>
              to make any changes and add logic to authorize user
            </li>
            <li>
              Visit{" "}
              <code className="bg-gray-100 px-1 rounded-md">/protected</code>,{" "}
              <code className="bg-gray-100 px-1 rounded-md">
                /protected/admin
              </code>{" "}
              and{" "}
              <code className="bg-gray-100 px-1 rounded-md">
                /protected/user
              </code>{" "}
              to see the implementation
            </li>
          </ul>
        </li>
        <li>Prisma</li>
        <li>Shadcn</li>
      </ul>
      <br />
      <div>
        Workspace for formatting on push and pull to GitHub is configured as
        well
      </div>
      <br />
      <div>Following npm commands are present as well</div>
      <ul className="list-inside list-disc">
        <li>
          <code>npm run lint:check</code> - to check for linting issues
        </li>
        <li>
          <code>npm run lint:fix</code> - to automatically fix linting issues
        </li>
        <li>
          <code>npm run format:check</code> - to check for formatting issues
        </li>
        <li>
          <code>npm run format:fix</code> - to automatically fix formatting
          issues
        </li>
      </ul>
      <br />
      <div>Authentication Status</div>
      <AuthStatus />
    </div>
  );
}
