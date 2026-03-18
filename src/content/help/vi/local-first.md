# Kiến trúc Local-First

Classic được xây dựng với quyền riêng tư làm nền tảng. Dữ liệu của bạn ở lại trên thiết bị của bạn, luôn luôn.

## "Local-First" Nghĩa là gì?

Local-first có nghĩa là:

1. **Dữ liệu của bạn được lưu trữ cục bộ** trên máy tính của bạn. Tất cả ghi chú, tệp đính kèm và cài đặt của bạn được lưu trữ trong một thư mục trên máy tính của bạn.
2. **Không cần đám mây** Classic hoạt động mà không cần kết nối internet.
3. **Bạn sở hữu dữ liệu của bạn** Bạn có quyền kiểm soát hoàn toàn đối với dữ liệu của bạn.

## Lưu trữ Dữ liệu

### Vị trí Mặc định

Dữ liệu của bạn được lưu trữ trong một thư mục chuyên dụng:

| Nền tảng | Vị trí |
| -------- | -------- |
| **macOS** | `~/Library/Application Support/Classic/notes` |
| **Windows** | `%APPDATA%\Classic\notes` |
| **Linux** | `~/.config/Classic/notes` |

### Định dạng Dữ liệu

- Ghi chú được lưu trữ dưới dạng tệp văn bản thuần (`.md`)
- Tệp đính kèm được lưu trữ trong thư mục con `attachments`
- Cài đặt được lưu trữ trong `settings.json`

### Cấu trúc Tệp

```
notes/
├── Inbox/
├── Daily Notes/
│   └── 2024-01-15.md
├── Projects/
│   ├── My Project.md
│   └── sub-note.md
└── attachments/
    └── image.png
settings.json
```

## Lợi ích Quyền riêng tư

### Không cần Tài khoản

- Không cần đăng ký
- Không cần xác minh email
- Không thu thập thông tin cá nhân

### Không Theo dõi

- Không có phân tích
- Không có telemetry
- Không có dữ liệu sử dụng được gửi đến máy chủ bên ngoài

### Có thể Ngoại tuyến

- Hoạt động mà không cần internet
- Chỉ đồng bộ khi bạn chọn
- Dữ liệu của bạn luôn có thể truy cập

## Bảo mật Dữ liệu

### Trách nhiệm của Bạn

- **Sao lưu**: Thiết lập sao lưu tự động trong Cài đặt
- **Xuất**: Xuất dữ liệu của bạn thường xuyên
- **Cập nhật**: Giữ Classic cập nhật để có các bản sửa bảo mật

### Trách nhiệm của Chúng tôi

- **Lưu trữ cục bộ**: Chúng tôi không bao giờ nhìn thấy hoặc chạm vào dữ liệu của bạn
- **Không có backdoor**: Không có thu thập dữ liệu ẩn
- **Minh bạch**: Minh bạch và trung thực về xử lý dữ liệu

## Đồng bộ (Tùy chọn)

Classic không bao gồm đồng bộ đám mây tích hợp. Tuy nhiên, bạn có thể đồng bộ dữ liệu của bạn:

### Sử dụng iCloud/OneDrive/Dropbox

1. Mở Cài đặt Classic
2. Thay đổi vị trí thư mục Ghi chú vào thư mục đám mây của bạn
3. Classic sẽ đồng bộ qua nhà cung cấp đám mây của bạn

### Sử dụng Git

1. Khởi tạo một git repo trong thư mục ghi chú của bạn
2. Commit và push thay đổi thủ công hoặc với tự động hóa

## Khôi phục Dữ liệu

### Từ Sao lưu

1. Mở Cài đặt
2. Đi đến Sao lưu & Khôi phục
3. Chọn một tệp sao lưu
4. Nhấp Khôi phục

### Khôi phục Thủ công

1. Định vị thư mục ghi chú của bạn
2. Sao chép các tệp vào một vị trí an toàn
3. Nhập vào một cài đặt Classic mới

## Các câu hỏi Thường gặp

### Dữ liệu của tôi có thực sự riêng tư không?

**Có.** Dữ liệu của bạn không bao giờ rời khỏi thiết bị của bạn trừ khi bạn đồng bộ nó rõ ràng sử dụng một dịch vụ bên thứ ba.

### Tôi có thể di chuyển dữ liệu của tôi sang máy tính khác không?

**Có.** Đơn giản sao chép thư mục ghi chú của bạn sang máy tính mới và trỏ Classic đến nó trong cài đặt.

### Điều gì xảy ra nếu tôi gỡ cài đặt Classic?

**Dữ liệu của bạn vẫn còn.** Gỡ cài đặt Classic không xóa thư mục ghi chú của bạn. Bạn có thể an toàn gỡ cài đặt và cài đặt lại mà không mất dữ liệu.

### Classic có thể truy cập dữ liệu của tôi không?

**Không.** Classic là một ứng dụng cục bộ không có kết nối bên ngoài để thu thập dữ liệu.
