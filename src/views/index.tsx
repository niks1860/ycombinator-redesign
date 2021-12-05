import { Route, Routes, Navigate } from "react-router-dom"
import Layout from "./layout"

const Views = () => {
  return (
    <Routes>
      <Route path="/auth" element={<div>Sign In / Sign Up Page</div>} />
      <Route element={<Layout />}>
        <Route path="stories" element={<div>Stories Page</div>} />
        <Route path="comments" element={<div>Comments Page</div>} />
        <Route path="asks" element={<div>Ask Page</div>} />
        <Route path="jobs" element={<div>Jobs Page</div>} />
        <Route path="" element={<Navigate to="/stories" />} />
      </Route>
    </Routes>
  )
}

export default Views
