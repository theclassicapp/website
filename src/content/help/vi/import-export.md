# Nhập & Xuất

Đưa ghi chú của bạn vào Classic từ các ứng dụng khác, hoặc xuất chúng để chia sẻ hoặc sao lưu. Classic hỗ trợ nhiều định dạng để di chuyển dữ liệu liền mạch.

## Nhập Ghi chú

### Các Định dạng Được hỗ trợ

| Định dạng | Phần mở rộng | Ghi chú |
| --------- | ------------ | ------ |
| Markdown | `.md` | ✅ Hỗ trợ đầy đủ |
| Văn bản Thuần | `.txt` | ✅ Nhập dưới dạng ghi chú |
| JSON | `.json` | ✅ Định dạng Classic |
| HTML | `.html` | ⚠️ Chuyển đổi sang Markdown |
| Evernote | `.enex` | ⚠️ Thử nghiệm |
| Notion | Xuất Notion | ⚠️ Thử nghiệm |
| Obsidian | Xuất Markdown | ✅ Hỗ trợ đầy đủ |

### Quy trình Nhập

1. Mở **Tệp** → **Nhập** (hoặc `Cmd/Ctrl+I`)
2. Chọn (các) tệp của bạn để nhập
3. Chọn thư mục đích
4. Xem trước nhập
5. Xác nhận nhập

### Nhập từ Clipboard

Nhập nhanh từ bất kỳ nguồn nào:

1. Sao chép văn bản vào clipboard
2. Mở Bảng lệnh
3. Gõ "Nhập từ Clipboard"
4. Ghi chú mới được tạo tự động

### Nhập Hàng loạt

Nhập nhiều tệp cùng một lúc:

1. Mở **Tệp** → **Nhập**
2. Chọn **Nhập Thư mục**
3. Chọn thư mục chứa ghi chú
4. Tất cả các tệp được hỗ trợ được nhập

## Xuất Ghi chú

### Các Định dạng Xuất

| Định dạng | Trường hợp Sử dụng |
| --------- | ------------------ |
| **Markdown** | Chia sẻ, sao lưu, ứng dụng khác |
| **HTML** | Xuất bản web, chia sẻ |
| **PDF** | Lưu trữ, in |
| **Văn bản Thuần** | Chia sẻ đơn giản |
| **JSON** | Tích hợp API |

### Xuất Ghi chú Đơn

1. Mở ghi chú bạn muốn xuất
2. Nhấp **Tệp** → **Xuất**
3. Chọn định dạng
4. Chọn vị trí
5. Lưu

### Xuất Nhiều Ghi chú

1. Chọn các ghi chú trong thanh bên (Cmd/Ctrl+click)
2. Nhấp chuột phải → **Xuất Đã chọn**
3. Chọn định dạng
4. Chọn vị trí
5. Lưu

### Xuất Tất cả Ghi chú

1. Mở **Tệp** → **Xuất Tất cả**
2. Chọn định dạng
3. Chọn vị trí
4. Đợi xuất hoàn tất

## Hướng dẫn Di chuyển

### Từ Obsidian

Classic có thể nhập các vault Obsidian trực tiếp:

1. Mở **Tệp** → **Nhập**
2. Chọn **Vault Obsidian**
3. Điều hướng đến thư mục vault của bạn
4. Chọn để nhập

**Những gì được chuyển:**

- ✅ Ghi chú và thư mục
- ✅ Thẻ
- ✅ Liên kết (chuyển đổi thành liên kết ngược)
- ✅ Siêu dữ liệu
- ⚠️ Plugin (không được hỗ trợ)

### Từ Notion

1. Xuất từ Notion dưới dạng Markdown
2. Nhập vào Classic
3. Xem lại định dạng
4. Sửa các liên kết bị hỏng

**Mẹo cho di chuyển Notion:**

- Sử dụng "Xuất dưới dạng Markdown" của Notion
- Kiểm tra định dạng checkbox
- Xác minh các tham chiếu database
- Tạo lại các database được liên kết thủ công

### Từ Evernote

1. Xuất từ Evernote dưới dạng HTML
2. Sử dụng tính năng nhập HTML của Classic
3. Xem lại nội dung đã chuyển đổi

**Mẹo cho di chuyển Evernote:**

- Các notebook trở thành thư mục
- Thẻ được bảo tồn
- Tệp đính kèm được nhập
- Kiểm tra định dạng

## Thực hành Tốt nhất

### Trước khi Nhập

- Sao lưu các ghi chú hiện có
- Xem trước nhập
- Kiểm tra các bản trùng lặp
- Xác minh định dạng

### Sau khi Nhập

- Xem lại các ghi chú đã nhập
- Sửa các vấn đề định dạng
- Cập nhật các liên kết nội bộ
- Thêm thẻ khi cần

### Xuất Định kỳ

- Xuất sao lưu hàng tháng
- Sử dụng các định dạng khác nhau cho các mục đích khác nhau
- Giữ các xuất được tổ chức theo ngày
- Lưu trữ trong đám mây cho sao lưu ngoại tuyến

## Khắc phục sự cố

### Nhập Thất bại

**Các nguyên nhân phổ biến:**

- Định dạng không được hỗ trợ
- Tệp bị hỏng
- Các vấn đề về quyền
- Giới hạn bộ nhớ

**Giải pháp:**

1. Thử một định dạng khác
2. Kiểm tra tính toàn vẹn của tệp
3. Xác minh quyền đọc
4. Nhập ít tệp hơn cùng một lúc

### Mất Định dạng

**Các nguyên nhân phổ biến:**

- Định dạng phức tạp
- Cú pháp không được hỗ trợ
- Giới hạn chuyển đổi

**Giải pháp:**

1. Sử dụng xuất Markdown từ ứng dụng nguồn
2. Đơn giản hóa định dạng trước khi nhập
3. Sửa thủ công sau khi nhập

### Thiếu Tệp đính kèm

**Các nguyên nhân phổ biến:**

- Nhập không bao gồm tệp đính kèm
- Đường dẫn tệp đính kèm sai
- Giới hạn kích thước

**Giải pháp:**

1. Nhập lại với tệp đính kèm
2. Kiểm tra thư mục tệp đính kèm
3. Nhập tệp đính kèm riêng biệt
