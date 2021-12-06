import { Route, Routes, Navigate } from "react-router-dom"
import Layout from "./layout"
import AsksPage from "./pages/AsksPage"
import JobsPage from "./pages/JobsPage"
import ShowsPage from "./pages/ShowsPage"
import StoriesPage from "./pages/StoriesPage"

const Views = () => {
  return (
    <Routes>
      <Route path="/auth" element={<div>Sign In / Sign Up Page</div>} />
      <Route element={<Layout />}>
        <Route path="stories" element={<StoriesPage />} />
        <Route path="shows" element={<ShowsPage />} />
        <Route path="asks" element={<AsksPage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="" element={<Navigate to="/stories" />} />
      </Route>
    </Routes>
  )
}

export default Views
