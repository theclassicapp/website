# Liên kết ngược

Liên kết ngược hiển thị các kết nối giữa các ghi chú của bạn, tạo ra một mạng lưới các ý tưởng liên quan. Khám phá các mối quan hệ bạn không biết tồn tại.

## Liên kết ngược là gì?

Liên kết ngược hiển thị ghi chú nào liên kết đến ghi chú hiện tại. Chúng là các kết nối trong đồ thị tri thức của bạn.

### Lợi ích

- **Khám phá kết nối**: Tìm ghi chú liên quan tự động
- **Bối cảnh**: Hiểu cách các ý tưởng liên quan
- **Điều hướng**: Nhảy giữa các ghi chú được kết nối
- **Đồ thị tri thức**: Hình dung tư duy của bạn

## Cách Liên kết ngược Hoạt động

Khi bạn tạo một liên kết đến ghi chú khác, Classic tự động tạo một liên kết ngược.

```markdown
Trong ghi chú A:
Xem [[Lập kế hoạch Dự án]] để biết chi tiết.

Kết quả:
- Ghi chú A liên kết đến "Lập kế hoạch Dự án"
- "Lập kế hoạch Dự án" hiển thị liên kết ngược đến Ghi chú A
```

## Xem Liên kết ngược

### Bảng Liên kết ngược

Mở bảng liên kết ngược để xem tất cả tham chiếu:

1. Mở bất kỳ ghi chú nào
2. Nhấp vào biểu tượng liên kết ngược trong thanh bên
3. Xem tất cả ghi chú liên kết đến ghi chú này

### Liên kết ngược Nội tuyến

Liên kết ngược xuất hiện ở dưới cùng của mỗi ghi chú:

- Hiển thị tên ghi chú nguồn
- Hiển thị đoạn bối cảnh
- Nhấp để điều hướng

## Tạo Liên kết

### Cú pháp Wikilink

Sử dụng ngoặc kép để liên kết đến ghi chú:

```markdown
[[Tên Ghi chú]]
[[Ghi chú Khác]]
```

### Văn bản Hiển thị

Tùy chỉnh văn bản liên kết:

```markdown
[[Dự án Alpha|dự án alpha]]
[[Ghi chú Cuộc họp|cuộc họp hôm qua]]
```

### Liên kết đến Tiêu đề

Liên kết đến các phần cụ thể:

```markdown
[[Tên Ghi chú#Tiêu đề]]
[[Tên Ghi chú#Phần|nhảy đến phần]]
```

## Các loại Liên kết ngược

### Liên kết Trực tiếp

Các wikilink rõ ràng bạn tạo:

```markdown
Liên quan: [[Ghi chú Tương tự]]
```

### Tham chiếu Không liên kết

Các ghi chú đề cập đến tiêu đề nhưng không được liên kết:

```markdown
Ghi chú đề cập "Dự án Alpha" nhưng không được liên kết
```

Classic gợi ý chuyển đổi chúng thành liên kết.

## Bảng Liên kết ngược

### Tính năng

- **Lọc**: Tìm kiếm qua các liên kết ngược
- **Sắp xếp**: Theo ngày, tên hoặc mức độ liên quan
- **Xem trước**: Di chuột để xem trước nội dung
- **Bối cảnh**: Xem văn bản xung quanh

### Hành động

- Nhấp để mở ghi chú được liên kết
- Nhấp chuột phải để xem tùy chọn
- Chuyển đổi các tham chiếu không liên kết

## Trường hợp Sử dụng

### Quản lý Tri thức

Xây dựng một wiki cá nhân:

```markdown
# Học máy

Liên quan đến [[Trí tuệ Nhân tạo]]
Xây dựng trên [[Thống kê]]
Được sử dụng trong [[Xử lý Ngôn ngữ Tự nhiên]]
```

### Tài liệu Dự án

Kết nối các tài liệu liên quan:

```markdown
# Thiết kế API

Tham khảo [[Lược đồ Database]]
Phụ thuộc vào [[Luồng Xác thực]]
Xem thêm [[Tích hợp Frontend]]
```

### Nghiên cứu

Liên kết các khái niệm và nguồn:

```markdown
# Ghi chú Nghiên cứu

Dựa trên [[Bài báo Nguồn A]]
Mâu thuẫn với [[Bài báo Nguồn B]]
Hỗ trợ [[Giả thuyết 1]]
```

### Ghi chú Cuộc họp

Kết nối các cuộc họp với dự án:

```markdown
# Cuộc họp: Lập kế hoạch Q4

Dự án: [[Dự án Alpha]]
Trước: [[Đánh giá Q3]]
Tiếp: [[Khởi động Q4]]
```

## Xem Đồ thị

Hình dung các liên kết ngược của bạn dưới dạng mạng lưới:

1. Mở Xem Đồ thị (`Cmd/Ctrl+G`)
2. Xem tất cả ghi chú dưới dạng các nút
3. Các đường hiển thị các kết nối
4. Nhấp vào các nút để điều hướng

### Điều khiển Đồ thị

- **Thu phóng**: Cuộn để thu phóng
- **Di chuyển**: Kéo để di chuyển
- **Lọc**: Hiển thị/ẩn theo thẻ
- **Tập trung**: Tô sáng các kết nối của một ghi chú

## Mẹo

### Liên kết Hào phóng

Tạo liên kết bất cứ khi nào bạn tham khảo một khái niệm khác:

```markdown
✅ Tốt:
Thảo luận về [[Lộ trình Q4]] và [[Phân bổ Ngân sách]].

❌ Tránh:
Thảo luận về Lộ trình Q4 và Phân bổ Ngân sách.
```

### Sử dụng Tên Nhất quán

Khớp tiêu đề ghi chú chính xác để liên kết đáng tin cậy:

```markdown
✅ [[Ghi chú Cuộc họp]]
❌ [[ghi chú cuộc họp]] (phân biệt chữ hoa/thường)
```

### Xem lại Liên kết ngược

Kiểm tra định kỳ các liên kết ngược để:

- Khám phá các kết nối đã quên
- Tìm các ghi chú để hợp nhất
- Xác định các khoảng trống tri thức

### Xem trước Liên kết

Di chuột qua các liên kết để xem trước mà không mở:

- Xem một vài dòng đầu tiên
- Kiểm tra xem đó có phải là ghi chú đúng không
- Tham khảo nhanh

## Phím tắt

| Hành động | Phím tắt |
|----------|----------|
| Mở Liên kết ngược | `Cmd/Ctrl+Shift+B` |
| Tạo Liên kết | `[[` (tự động hoàn thành) |
| Mở Xem Đồ thị | `Cmd/Ctrl+G` |
| Điều hướng Liên kết | `Tab` qua các liên kết |

## Tính năng Nâng cao

### Nhúng

Nhúng nội dung từ các ghi chú khác:

```markdown
![[Tên Ghi chú]]
![[Tên Ghi chú#Phần]]
```

### Transclusion

Bao gồm nội dung nội tuyến:

```markdown
## Nội dung Liên quan
![[Mẫu Chia sẻ#Tiêu đề]]
```

### Tô màu Liên kết

Liên kết thay đổi màu dựa trên:

- **Xanh dương**: Liên kết chưa truy cập
- **Tím**: Liên kết đã truy cập
- **Đỏ**: Liên kết hỏng (ghi chú không tồn tại)

## Khắc phục sự cố

### Thiếu Liên kết ngược

- Kiểm tra cú pháp liên kết `[[Tên Ghi chú]]`
- Xác minh tiêu đề ghi chú khớp chính xác
- Làm mới bảng liên kết ngược

### Liên kết Bị hỏng

- Ghi chú có thể đã được đổi tên
- Ghi chú có thể đã bị xóa
- Sử dụng tìm kiếm để tìm ghi chú đúng

### Liên kết Trùng lặp

- Hợp nhất các ghi chú tương tự
- Sử dụng chuyển hướng cho các ghi chú đã đổi tên
- Kiểm tra các biến thể tiêu đề
