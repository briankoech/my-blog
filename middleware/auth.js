export default ({ store, redirect, route }) => {
  const user = store.state.authUser
  if (user && route.name === 'login') redirect('/admin')
  if (!user && route.name === 'admin') redirect('/login')
}
