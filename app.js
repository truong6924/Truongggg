// 1. NodeJS là gì??

// NodeJS là 1 runtime giúp cho Javascript có thể chạy trên server

// 2. Mô hình client-server 

// client(browsers) ----Request----> server
//                  <---Response---
// Request (GET/POST/PUT/DELETE)
// Response (HTML,CSS,Javarscript,Json,...)

// 3. CSR vs SSR
// Client-side rendering
// Server sé gửi thông tin về cho client dưới dạng json và browser sẽ render ra những thông tin đó
// VD: 
// Build trang web front-end dựa vào API

// Server-side rending
// Server sẽ gửi về HTML, CSS, Javascript cho client và browser sẽ render ra trang web mong muốn 
// VD: Toàn bộ HTML, CSS, Javascript sẽ được build tại backend(server)

// npm - node package manager

// 1. npm init 
// Khởi tạo 1 file package.json 
// File package.json là nơi lưu trữ các thông tin về project node.js
// Đồng thời là nơi quản lý thông tin về các packages đã cài đặt vào project nodejs

// 2. npm install(i) + package_name 
// Muốn cài đặt gói (package) nào thì tìm trên chợ npm (npmjs.com)
// Tiến hành cài đặt: npm + i + package_name

// 3. Trường dependencies trong package.json 
// Quản lý thông tin về các packages đã cài đặt vào project nodejs
// Trong trường hợp muốn cài lại toàn bộ những package có trong dependencies
// ---> npm + i

// 4. File.gitignore
// Khi muốn đẩy project nodejs lên trên github
// Khởi tạo 1 file tên .gitignore và điền những thư mục hoặc file không muốn đẩy lên vào trong .gitignore

// Sử dụng terminal (command prompt)
// ls - (kiểm tra những gì đang có trong thư mục)
// cd [folder] - (Di chuyển vào trong thư mục nào đó)
// cd.. -Di chuyển ra khỏi thư mục hiện tại 