# SouthernLink Official Website

Website giới thiệu chính thức cho công ty công nghệ **SouthernLink**, được thiết kế theo phong cách hiện đại tương tự **[www.nguyenlethanh.com](https://www.nguyenlethanh.com)** kết hợp cùng banner hero slider quy mô lớn lấy cảm hứng từ **[Precision Software Australia](https://precisionsoftware.com.au/)**.

---

## 📁 Cấu trúc thư mục dự án

```text
SouthernLink_WebSite/
├── index.html            # Trang chủ (Home) với banner lớn đa slide, tổng quan công ty & dịch vụ cốt lõi
├── services.html         # Trang Dịch vụ (Services) chi tiết cho cả 7 nhóm dịch vụ IT & ICT
├── about.html            # Trang Về chúng tôi (About Us) với sứ mệnh, giá trị cốt lõi & năng lực kỹ thuật
├── career.html           # Trang Tuyển dụng (Career) với văn hóa công ty & thông tin ứng tuyển
├── contact.html          # Trang Liên hệ (Contact Us) với form liên hệ trực tuyến, thông tin liên lạc
├── assets/
│   ├── css/
│   │   └── style.css     # Stylesheet tùy biến, hiệu ứng slider, typography & nút bấm
│   └── js/
│       ├── main.js       # Quản lý navbar động, mobile drawer menu, form xử lý
│       └── slider.js     # Banner slider tương tác: autoplay, prev/next, indicators, touch swipe
└── medias/
    ├── logo.png          # Logo thương hiệu SouthernLink
    ├── icon.png          # Favicon website SouthernLink
    └── technology/       # 19 logo công nghệ thực tế từ Precision Software

---

## 🌟 Điểm nổi bật trong thiết kế

1. **Trang Home với Banner Hero lớn (Precision Software Style)**:
   - Sử dụng các hình ảnh banner độ phân giải cao từ NEC Australia Professional Services.
   - Hiệu ứng slider mượt mà với tiêu đề chữ hoa to, badge nổi bật, nút kêu gọi hành động dạng pill màu đỏ đặc trưng (*"Request a Free Consultation"* và *"Explore Our Services"*).
   - Tự động chuyển slide (Autoplay) sau 5.5s, tạm dừng khi rê chuột (Pause on hover), hỗ trợ phím mũi tên và cảm ứng vuốt trên di động / máy tính bảng.

2. **Giao diện chuẩn phong cách NguyenLeThanh.com**:
   - Thanh điều hướng (Navbar) hiện đại gắn cố định (`sticky`), hiệu ứng mờ kính `backdrop-blur`, tự động làm nổi bật trang đang hoạt động.
   - Thẻ hiển thị (Cards) viền nhẹ tinh tế `border-slate-200`, đổ bóng mềm mại, bo góc chuẩn mực `rounded-2xl`, hiệu ứng bay nhẹ khi hover (`card-hover-effect`).
   - Phối màu công nghệ sang trọng: Xanh Tech Blue (`#0284c7`), Xanh đen sâu (`#0f172a`), và Đỏ điểm nhấn Precision (`#e53935`).

3. **Đầy đủ 7 dịch vụ IT cốt lõi**:
   - Website Design & Development
   - Custom Software & Application Development (.NET, C#, React, Azure)
   - IT & ICT Solutions
   - Data Analytics & Database Management (SQL Server, PostgreSQL, Power BI)
   - System Integration & Automation
   - IT Consulting & Technical Support
   - Digital Transformation Solutions

4. **Thông tin liên hệ chuẩn xác & Form tương tác**:
   - **Email**: [contact@southernlink.com.au](mailto:contact@southernlink.com.au)
   - **Phone**: [+61 652 603 468](tel:+61652603468)
   - **Địa điểm**: Level 3/89 Pirie St, Adelaide SA 5000
   - Form gửi thông điệp và đăng ký tư vấn miễn phí với phản hồi tương tác trực tiếp ngay trên trang.

---

## 🚀 Cách mở và chạy website

### Cách 1: Mở trực tiếp trong trình duyệt
Bạn chỉ cần nhấp đúp trực tiếp vào file `index.html` trong thư mục dự án để mở bằng Chrome, Edge, Firefox, hoặc Safari.

### Cách 2: Chạy qua Local Web Server (Khuyên dùng)
Trong thư mục dự án, chạy lệnh:
```bash
python -m http.server 8000
```
Sau đó truy cập trình duyệt tại: `http://localhost:8000`
