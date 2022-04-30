import { defineConfig } from 'vite'
import { createVuePlugin } from "vite-plugin-vue2";
import CompressionWebpackPlugin from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
    /** gzip压缩 */
    CompressionWebpackPlugin({
      algorithm: 'gzip',
      threshold: 10240 //只有大小大于该值的资源会被处理。默认值是 10k
    }),
  ],
  define: {
    /** 项目环境变量 */
    'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV)
  },
  resolve: {
    /** 添加alias规则 */
    alias: [
      {
        find: '@/',
        replacement: '/src/'
      },

      {
        find: '~@/',
        replacement: '/src/'
      }
    ],
    extensions: [".vue", ".js", ".json"],
  },
  build: {
    chunkSizeWarningLimit: 2000,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    brotliSize: false,
    /** 禁止css代码分割 */
    cssCodeSplit: false,
  },

  server: {
    proxy: {  //proxy代理
      '/admin_demo_api': {
        target: 'https://guojiongwei.top/admin_demo_api/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/admin_demo_api/, '')
      },
    }
  }
})
