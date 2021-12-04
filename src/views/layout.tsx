import { Navigate, Outlet, Route, Routes } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </div>
  )
}

export default Layout
