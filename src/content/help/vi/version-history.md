# Lịch sử Phiên bản

Classic theo dõi mọi thay đổi đối với ghi chú của bạn. Duyệt, so sánh và khôi phục các phiên bản trước bất cứ khi nào bạn cần.

## Cách Lịch sử Phiên bản Hoạt động

### Theo dõi Tự động

Classic tự động lưu các phiên bản của ghi chú của bạn:

- **Mọi chỉnh sửa**: Mỗi lần lưu tạo một phiên bản
- **Có dấu thời gian**: Biết khi nào các thay đổi xảy ra
- **Nội dung đầy đủ**: Các snapshot hoàn chỉnh được bảo tồn

### Lưu trữ

| Cài đặt | Mặc định |
|---------|---------|
| **Lưu trữ Lịch sử** | 90 ngày |
| **Phiên bản Tối đa** | 100 cho mỗi ghi chú |
| **Tự động dọn dẹp** | Có |

Cấu hình các mục này trong Cài đặt → Trình soạn thảo → Lịch sử Phiên bản.

## Xem Lịch sử

### Mở Lịch sử Phiên bản

1. Mở bất kỳ ghi chú nào
2. Nhấp vào biểu tượng lịch sử trong thanh công cụ
3. Hoặc sử dụng `Cmd/Ctrl+H`

### Bảng Lịch sử

Bảng lịch sử hiển thị:

- **Dòng thời gian**: Danh sách tất cả các phiên bản
- **Dấu thời gian**: Khi mỗi phiên bản được lưu
- **Xem trước**: Xem nội dung của phiên bản đã chọn

### Điều hướng Phiên bản

1. Nhấp vào bất kỳ phiên bản nào trong danh sách
2. Xem trước hiển thị phiên bản đó
3. Cuộn qua các thay đổi
4. So sánh với phiên bản hiện tại

## So sánh Phiên bản

### Chế độ xem Cạnh nhau

Xem sự khác biệt giữa các phiên bản:

1. Mở lịch sử phiên bản
2. Chọn một phiên bản
3. Nhấp "So sánh"
4. Xem các phần thêm (xanh lá) và xóa (đỏ)

### Chế độ xem Diff

Sự khác biệt văn bản được tô sáng:

- **Xanh lá**: Nội dung được thêm
- **Đỏ**: Nội dung bị xóa
- **Không thay đổi**: Văn bản thường

## Khôi phục Phiên bản

### Khôi phục Toàn bộ Ghi chú

Thay thế nội dung hiện tại bằng một phiên bản trước:

1. Mở lịch sử phiên bản
2. Chọn phiên bản
3. Nhấp "Khôi phục"
4. Xác nhận hành động

### Khôi phục Phần chọn

Sao chép chỉ một phần của phiên bản trước:

1. Mở lịch sử phiên bản
2. Chọn phiên bản
3. Tô sáng văn bản bạn muốn
4. Nhấp "Sao chép vào Clipboard"
5. Dán vào ghi chú hiện tại của bạn

### Tạo Ghi chú Mới từ Phiên bản

Giữ cả hai phiên bản:

1. Mở lịch sử phiên bản
2. Chọn phiên bản
3. Nhấp "Tạo Ghi chú từ Phiên bản"
4. Một ghi chú mới được tạo

## Hành động Lịch sử Phiên bản

| Hành động | Mô tả |
|----------|-------------|
| **Xem** | Xem trước phiên bản |
| **So sánh** | Diff với hiện tại |
| **Khôi phục** | Thay thế hiện tại bằng cái này |
| **Sao chép** | Sao chép nội dung vào clipboard |
| **Xóa** | Xóa phiên bản này |

## Phím tắt

| Hành động | Phím tắt |
|----------|----------|
| Mở Lịch sử | `Cmd/Ctrl+H` |
| Phiên bản Trước | `Up` |
| Phiên bản Tiếp | `Down` |
| Khôi phục | `Cmd/Ctrl+R` |
| Đóng Lịch sử | `Escape` |

## Cài đặt

### Cấu hình trong Cài đặt → Trình soạn thảo → Lịch sử Phiên bản

| Cài đặt | Tùy chọn | Mặc định |
|---------|---------|---------|
| Kích hoạt Lịch sử | Bật/Tắt | Bật |
| Thời gian Lưu trữ | 30/60/90/180 ngày | 90 ngày |
| Phiên bản Tối đa | 50/100/200/500 | 100 |

### Vị trí Lưu trữ

Lịch sử phiên bản được lưu trữ cục bộ:

- **macOS**: `~/Library/Application Support/Classic/history/`
- **Windows**: `%APPDATA%/Classic/history/`
- **Linux**: `~/.config/Classic/history/`

## Trường hợp Sử dụng

### Khôi phục Thay đổi Tai nạn

1. Mở lịch sử phiên bản
2. Tìm phiên bản trước lỗi
3. Khôi phục phiên bản đó

### So sánh Bản nháp

1. Mở lịch sử
2. So sánh các phiên bản khác nhau
3. Xem ghi chú đã phát triển như thế nào

### Tìm Nội dung Đã xóa

1. Duyệt các phiên bản cũ hơn
2. Tìm kiếm văn bản đã xóa
3. Sao chép lại

### Theo dõi Tiến độ

Xem ghi chú phát triển như thế nào theo thời gian:

- Khi nào các ý tưởng được thêm
- Cấu trúc thay đổi như thế nào
- Sự phát triển viết

## Mẹo

### Xem lại Định kỳ

Định kỳ xem xét lịch sử phiên bản:

- Dọn dẹp các phiên bản không cần thiết
- Ghi chú nội dung phát triển như thế nào
- Học từ các mẫu chỉnh sửa của bạn

### Trước Các Thay đổi Lớn

Tạo một điểm kiểm tra:

1. Thực hiện một chỉnh sửa nhỏ
2. Lưu (tạo một phiên bản)
3. Bây giờ thực hiện các thay đổi lớn của bạn
4. Dễ dàng khôi phục nếu cần

### Đặt tên Các Phiên bản Quan trọng

Thêm các đánh dấu trong ghi chú của bạn:

```markdown
<!-- PHIÊN BẢN: Bản nháp cuối -->
<!-- PHIÊN BẢN: Trước khi tái cấu trúc -->
```

Những cái này giúp xác định các phiên bản sau.

## Khắc phục sự cố

### Lịch sử Không Lưu

- Kiểm tra xem lịch sử phiên bản có được kích hoạt không
- Xác minh vị trí lưu trữ có không gian
- Kiểm tra quyền tệp

### Không thể Tìm Phiên bản Cũ

- Phiên bản có thể đã được tự động dọn dẹp
- Kiểm tra cài đặt lưu trữ
- Tăng thời gian lưu trữ

### Lịch sử Chiếm Quá Nhiều Không gian

1. Giảm thời gian lưu trữ
2. Giảm phiên bản tối đa cho mỗi ghi chú
3. Chạy dọn dẹp thủ công

### Tải Lịch sử Chậm

Các ghi chú lớn với nhiều phiên bản có thể tải chậm:

- Kiên nhẫn với các lịch sử lớn
- Cân nhắc giảm phiên bản tối đa
- Lưu trữ các ghi chú cũ

## Quyền riêng tư & Bảo mật

### Lưu trữ Cục bộ

Lịch sử phiên bản được lưu trữ cục bộ:

- Không bao giờ gửi đến máy chủ
- Dữ liệu của bạn giữ riêng tư
- Chỉ bạn có quyền truy cập

### Sao lưu Được mã hóa

Nếu bạn sử dụng sao lưu được mã hóa:

- Lịch sử phiên bản được bao gồm
- Được bảo vệ bởi mật khẩu sao lưu của bạn
- An toàn ngay cả trong các tệp sao lưu
