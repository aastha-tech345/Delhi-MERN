const data = localStorage.getItem('record')
const loginUser = JSON.parse(data)
console.log(loginUser)
const userPermission = loginUser?.user?.role?.permission || []

const isAdmin = loginUser?.user?.user_role === 'admin'

export const verifyPer = () => {
  if (isAdmin) {
    return ['Klientlnnen', 'Dashboard', 'Einstellungen']
  }

  //   return userPermission.filter((elem) =>
  //     ['Dashboard', 'Klientlnnen', 'Einstellungen'].includes(elem.section_name),
  //   )
  //   .map((elem) => elem.section_name)

  return userPermission?.map((elem) => {
    const { section_name, p_show } = elem
    if (section_name === 'Dashboard' && p_show === 'yes') {
      return 'Dashboard'
    }
    if (section_name === 'Klientlnnen' && p_show === 'yes') {
      return 'Klientlnnen'
    }
    if (section_name === 'Einstellungen' && p_show === 'yes') {
      return 'Einstellungen'
    } else {
      return null
    }
  })
}
