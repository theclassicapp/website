# Ghi chú Hàng ngày

Ghi chú Hàng ngày tự động tạo một ghi chú mới cho mỗi ngày, hoàn hảo cho việc viết nhật ký, lập kế hoạch hàng ngày và ghi lại thông tin dựa trên thời gian.

## Cách Hoạt động

### Tạo Tự động

- Một ghi chú mới được tạo cho mỗi ngày
- Ghi chú được đặt tên sử dụng định dạng ngày (ví dụ: `2024-01-15.md`)
- Các ghi chú của các ngày trước được bảo tồn và có thể tìm kiếm

### Truy cập Ghi chú Hàng ngày

1. Nhấp vào **Ghi chú Hàng ngày** trong thanh bên
2. Hoặc nhấn `Ctrl/Cmd+D`
3. Ghi chú của ngày hôm nay mở tự động

## Mẫu Ghi chú Hàng ngày

Tùy chỉnh mẫu cho các ghi chú hàng ngày mới.

### Mẫu Mặc định

```markdown
# {{date}}

## Việc cần làm
- [ ]
- [ ]

## Ghi chú


## Nhật ký

```

### Tùy chỉnh

1. Mở Cài đặt
2. Đi đến Ghi chú Hàng ngày
3. Chỉnh sửa mẫu
4. Sử dụng `{{date}}` cho ngày hiện tại

### Biến Mẫu

| Biến | Mô tả |
| ---- | ----------- |
| `{{date}}` | Ngày hiện tại (YYYY-MM-DD) |
| `{{time}}` | Giờ hiện tại (HH:mm) |
| `{{weekday}}` | Tên ngày (Thứ Hai, v.v.) |

## Tính năng

### Điều hướng Ngày

- **Trước/Tiếp**: Điều hướng giữa các ngày
- **Lịch**: Nhảy đến ngày cụ thể
- **Tìm kiếm**: Tìm nội dung trên tất cả ghi chú hàng ngày

### Liên kết Tự động

- Các ghi chú được tạo trong cùng một ngày được liên kết tự động
- Liên kết ngược hiển thị các kết nối giữa các ngày
- Thẻ hoạt động trên tất cả ghi chú hàng ngày

### Tích hợp

- **Ghi nhanh**: Thêm vào ghi chú hôm nay với `#hôm nay`
- **Xem Lịch**: Tổng quan trực quan về ghi chú hàng ngày của bạn
- **Thống kê**: Theo dõi chuỗi viết của bạn

## Thực hành Tốt nhất

### Viết Nhật ký Hàng ngày

```markdown
# 2024-01-15

## Buổi sáng
- Thức dậy lúc 6:30
- Cảm giác: Năng động

## Việc cần làm
- [x] Tập thể dục buổi sáng
- [ ] Đánh giá PR
- [ ] Cuộc họp nhóm lúc 2 giờ chiều

## Học được
- Phát hiện một phím tắt mới
- Tìm hiểu về sơ đồ Mermaid

## Ngày mai
- Tập trung vào tài liệu
- Lên lịch đánh giá mã
```

### Ghi chú Cuộc họp

```markdown
# 2024-01-15

## Standup Nhóm

**Người tham dự**: Alice, Bob, Carol

### Cập nhật
- Alice: Hoàn thành tích hợp API
- Bob: Đang làm trên các component UI
- Carol: Đang kiểm tra

### Trở ngại
- Đang chờ đánh giá thiết kế

### Mục Hành động
- [ ] Alice: Triển khai lên staging
- [ ] Bob: Hoàn thành thư viện component
- [ ] Carol: Viết test tích hợp
```

### Nhật ký Học tập

```markdown
# 2024-01-15

## Hôm nay Tôi Đã Học

### Sơ đồ Mermaid
- Có thể tạo sơ đồ luồng trong Markdown
- Cú pháp rất đơn giản
- Xem trước trực tiếp rất hữu ích

### Tài nguyên
- [Tài liệu Mermaid](https://mermaid.js.org/)

## Câu hỏi
- Làm thế nào để tạo sơ đồ phức tạp?
- Thực hành tốt nhất cho tổ chức sơ đồ?
```

## Mẹo

### Nhất quán

- Tạo ghi chú vào cùng một thời điểm mỗi ngày
- Sử dụng định dạng nhất quán
- Xem lại và cập nhật trong suốt cả ngày

### Tổ chức

- Sử dụng tiêu đề cho các phần khác nhau
- Thêm thẻ để dễ tìm kiếm
- Liên kết đến các ghi chú liên quan

### Xem lại

- Xem lại hàng tuần các ghi chú hàng ngày
- Trích xuất các mục quan trọng vào ghi chú vĩnh viễn
- Lưu trữ hoặc tóm tắt các ghi chú cũ
