
export function login(email, password) {
  return new Promise((resolve) => {
    // api.loging(email, password)
    resolve({
      email,
      name: 'Cristiam',
      lastName: 'Da Silva'
    })
  })
}
