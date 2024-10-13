import RoleRoute from "@/components/RoleRoute";

export default function UserPage() {
  return (
    <RoleRoute role="user">
      <div className="p-4">
        This page is only accessible if session role is user.
      </div>
    </RoleRoute>
  );
}
