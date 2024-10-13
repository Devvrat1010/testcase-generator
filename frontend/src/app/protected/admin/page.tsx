import RoleRoute from "@/components/RoleRoute";

export default function AdminPage() {
  return (
    <RoleRoute role="admin">
      <div className="p-4">
        This page is only accessible is the user has a role of admin
      </div>
    </RoleRoute>
  );
}
