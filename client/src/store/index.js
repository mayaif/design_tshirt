import { proxy } from 'valtio'

//initialize the state
const state = proxy({
  intro: true, //are we in the home page or not
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png'
})

export default state