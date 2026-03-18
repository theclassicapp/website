# Sao lưu & Khôi phục

Giữ ghi chú của bạn an toàn với hệ thống sao lưu tích hợp của Classic. Không bao giờ mất công việc của bạn nữa.

## Sao lưu Tự động

### Cách Hoạt động

Classic tự động tạo sao lưu của ghi chú của bạn tại các khoảng đều đặn:

- **Tần suất mặc định**: Mỗi 30 phút
- **Vị trí sao lưu**: Cùng thư mục với ghi chú của bạn
- **Lưu trữ**: Giữ 10 bản sao lưu cuối cùng
- **Định dạng**: Lưu trữ nén (`.cbak`)

### Cấu hình Tự động Sao lưu

1. Mở Cài đặt
2. Điều hướng đến **Sao lưu & Khôi phục**
3. Cấu hình các mục sau:

| Cài đặt | Tùy chọn | Mặc định |
| ------- | -------- | -------- |
| Kích hoạt Tự động Sao lưu | Bật/Tắt | Bật |
| Tần suất Sao lưu | 15phút / 30phút / 1giờ / 4giờ | 30phút |
| Giữ Sao lưu | 5 / 10 / 20 / 50 | 10 |
| Vị trí Sao lưu | Đường dẫn tùy chỉnh | Thư mục ghi chú |

## Sao lưu Thủ công

### Tạo Sao lưu Ngay

1. Mở Bảng lệnh (`Cmd/Ctrl+P`)
2. Gõ "Sao lưu"
3. Chọn **Tạo Sao lưu Ngay**
4. Chọn vị trí (tùy chọn)
5. Sao lưu được tạo

### Định dạng Tệp Sao lưu

Sao lưu được lưu trữ dưới dạng tệp `.cbak` chứa:

- Tất cả ghi chú (tệp Markdown)
- Tệp đính kèm
- Cài đặt
- Siêu dữ liệu (thẻ, liên kết, v.v.)

## Khôi phục từ Sao lưu

### Quy trình Khôi phục

1. Mở Cài đặt
2. Đi đến **Sao lưu & Khôi phục**
3. Nhấp **Khôi phục từ Sao lưu**
4. Chọn tệp sao lưu
5. Chọn tùy chọn khôi phục
6. Xác nhận khôi phục

### Tùy chọn Khôi phục

| Tùy chọn | Mô tả |
| -------- | ----------- |
| **Thay thế Tất cả** | Hoàn toàn thay thế ghi chú hiện tại bằng sao lưu |
| **Hợp nhất** | Kết hợp sao lưu với ghi chú hiện có |
| **Xem trước** | Xem nội dung sao lưu trước khi khôi phục |

### Những gì Được Khôi phục

- ✅ Tất cả ghi chú và thư mục
- ✅ Tệp đính kèm
- ✅ Thẻ và siêu dữ liệu
- ✅ Lịch sử ghi chú
- ⚠️ Cài đặt (tùy chọn)
- ❌ Tùy chọn ứng dụng

## Vị trí Sao lưu

### Vị trí Mặc định

```
~/Classic/backups/
├── backup-2024-01-15-10-30.cbak
├── backup-2024-01-15-11-00.cbak
└── backup-2024-01-15-11-30.cbak
```

### Vị trí Tùy chỉnh

1. Mở Cài đặt
2. Đi đến Sao lưu & Khôi phục
3. Nhấp "Thay đổi Vị trí Sao lưu"
4. Chọn thư mục ưa thích của bạn

### Sao lưu Đám mây

Trỏ vị trí sao lưu vào một thư mục được đồng bộ đám mây:

- **iCloud**: `~/Library/Mobile Documents/com~apple~CloudDocs/Classic Backups`
- **Dropbox**: `~/Dropbox/Classic Backups`
- **Google Drive**: `~/Google Drive/Classic Backups`
- **OneDrive**: `~/OneDrive/Classic Backups`

## Thực hành Tốt nhất

### Lịch Sao lưu

- **Tự động Sao lưu**: Giữ kích hoạt ở khoảng 30 phút
- **Sao lưu Thủ công**: Tạo trước các thay đổi lớn
- **Sao lưu Ngoại tuyến**: Thường xuyên sao chép sao lưu vào lưu trữ bên ngoài

### Xác minh Sao lưu

Định kỳ xác minh các sao lưu của bạn:

1. Tạo một khôi phục thử nghiệm
2. Kiểm tra nội dung ghi chú
3. Xác minh tệp đính kèm
4. Xác nhận siêu dữ liệu

### Xoay vòng Sao lưu

- Giữ các sao lưu gần đây cục bộ
- Lưu trữ các sao lưu cũ hơn vào lưu trữ bên ngoài
- Xóa các sao lưu rất cũ để tiết kiệm không gian

## Khắc phục sự cố

### Sao lưu Thất bại

**Các nguyên nhân có thể**

- Không đủ dung lượng đĩa
- Các vấn đề về quyền
- Tệp đang được sử dụng

**Giải pháp**

1. Kiểm tra dung lượng đĩa khả dụng
2. Xác minh quyền thư mục
3. Đóng các ứng dụng khác
4. Thử một vị trí khác

### Khôi phục Thất bại

**Các nguyên nhân có thể**

- Tệp sao lưu bị hỏng
- Phiên bản không tương thích
- Không đủ không gian

**Giải pháp**

1. Thử một sao lưu cũ hơn
2. Kiểm tra tính toàn vẹn của tệp sao lưu
3. Giải phóng dung lượng đĩa
4. Liên hệ hỗ trợ

### Thiếu Sao lưu

**Các nguyên nhân có thể**

- Tự động sao lưu bị tắt
- Vị trí sao lưu đã thay đổi
- Sao lưu đã bị xóa

**Giải pháp**

1. Kiểm tra cài đặt sao lưu
2. Xác minh vị trí sao lưu
3. Kích hoạt tự động sao lưu
4. Tạo sao lưu thủ công ngay

## Tùy chọn Nâng cao

### Sao lưu Được mã hóa

Để bảo mật thêm:

1. Mở Cài đặt
2. Đi đến Sao lưu & Khôi phục
3. Kích hoạt "Mã hóa Sao lưu"
4. Đặt mật khẩu
5. Hãy nhớ mật khẩu này - nó không thể được khôi phục

### Sao lưu Gia tăng

Tiết kiệm không gian với sao lưu gia tăng:

- Chỉ các thay đổi kể từ lần sao lưu cuối được lưu trữ
- Khôi phục đầy đủ tái tạo trạng thái hoàn chỉnh
- Giảm thời gian và kích thước sao lưu

### Loại trừ Sao lưu

Loại trừ nội dung cụ thể khỏi sao lưu:

1. Mở Cài đặt
2. Đi đến Sao lưu & Khôi phục
3. Nhấp "Loại trừ"
4. Thêm các thư mục hoặc tệp để loại trừ
