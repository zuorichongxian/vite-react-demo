import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
    server: {				// ← ← ← ← ← ←
        host: '0.0.0.0'	// ← 新增内容 ←
    },
    plugins: [
        react(),
        vitePluginImp({
            libList: [
                {
                    libName: "antd",
                    style: (name) => `antd/lib/${name}/style`,
                },
            ],
        })
    ],
    css: {
        preprocessorOptions: {
            less: {
                // 支持内联 JavaScript
                javascriptEnabled: true,
            }
        }
    },
})