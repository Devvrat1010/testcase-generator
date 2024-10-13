import ProtectedRoute from "@/components/ProtectedRoute";
export default function Protected() {
  return (
    <ProtectedRoute>
      <div className="p-4">
        This is a protected page only accessible if user is signed in
      </div>
    </ProtectedRoute>
  );
}
