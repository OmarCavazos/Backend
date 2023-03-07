import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  server:{ proxy:{ '/api':"http://localhost:8080"} }
=======
  server:{
    proxy:{
      '/api':"http://localhost:8080"
    }
  }
>>>>>>> ca844db0d093b7eb12b6f8f7c5446eb1a75f2894
})
