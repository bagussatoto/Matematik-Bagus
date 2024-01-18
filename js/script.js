const formLuas = document.getElementById('form-luas')
const formKeliling = document.getElementById('form-keliling')
formLuas.addEventListener('click', (e) => {
  e.preventDefault()
})
formKeliling.addEventListener('click', (e) => {
  e.preventDefault()
})

const inputLuas = document.getElementById('input-luas')
const hitungLuas = document.getElementById('hitungLuas')
const resultLuas = document.querySelector('.result-luas')
hitungLuas.addEventListener('click', () => {
  const sisi = inputLuas.value
  const rumus = sisi * sisi

  const resultInput = document.querySelector('.result-input-luas')
  const resultAkhir = document.querySelector('.result-akhir-luas')

  if (sisi === "") {
    resultLuas.style.display = 'none'
    return
  }
  
  resultInput.textContent = `L = ${sisi} x ${sisi}`
  resultAkhir.textContent = `L = ${rumus}`
  resultLuas.style.display = 'flex'
  inputLuas.value = ""
})

const resetLuas  = document.getElementById('resetLuas')
resetLuas.addEventListener('click', () => {
  inputLuas.value = ""
  resultLuas.style.display = 'none'
})

const inputKeliling = document.getElementById('input-keliling')
const hitungKeliling = document.getElementById('hitungKeliling')
const resultKeliling = document.querySelector('.result-keliling')
hitungKeliling.addEventListener('click', () => {
  const sisi = inputKeliling.value
  const rumus = 4 * sisi

  const resultInput = document.querySelector('.result-input-keliling')
  const resultAkhir = document.querySelector('.result-akhir-keliling')

  if (sisi === "") {
    resultKeliling.style.display = 'none'
    return
  }
  
  resultInput.textContent = `K = 4 x ${sisi}`
  resultAkhir.textContent = `K = ${rumus}`
  resultKeliling.style.display = 'flex'
  inputKeliling.value = ""
})

const resetKeliling  = document.getElementById('resetKeliling')
resetKeliling.addEventListener('click', () => {
  inputKeliling.value = ""
  resultKeliling.style.display = 'none'
})

const linkKeliling = document.getElementById('link-keliling') 
const linkLuas = document.getElementById('link-luas') 
const asideLuas = document.getElementById('aside-luas')
const asideKeliling = document.getElementById('aside-keliling')
const mainLuas = document.getElementById('main-luas')
const mainKeliling = document.getElementById('main-keliling')
linkKeliling.addEventListener('click', () => {
  asideLuas.style.display = 'none'
  asideKeliling.style.display = 'block'
  mainLuas.style.display = 'none'
  mainKeliling.style.display = 'block'
  resultLuas.style.display = 'none'
})
linkLuas.addEventListener('click', () => {
  asideLuas.style.display = 'block'
  asideKeliling.style.display = 'none'
  mainLuas.style.display = 'block'
  mainKeliling.style.display = 'none'
  resultKeliling.style.display = 'none'
})
