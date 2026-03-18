# Thẻ

Thẻ là một cách mạnh mẽ để tổ chức và phân loại ghi chú của bạn trong Classic. Tìm nội dung liên quan ngay lập tức.

## Tạo Thẻ

### Thẻ Nội tuyến

Thêm thẻ trực tiếp trong nội dung ghi chú của bạn:

```markdown
# Ghi chú Cuộc họp

Thảo luận về lộ trình Q4 #côngviệc #cuộchọp #lậpkếhoạch
```

### Sử dụng Nút Thẻ

1. Nhấp vào biểu tượng thẻ trong thanh công cụ
2. Gõ tên thẻ của bạn
3. Nhấn Enter

### Phím tắt

| Nền tảng | Phím tắt |
|----------|----------|
| **macOS** | `Cmd+T` |
| **Windows/Linux** | `Ctrl+T` |

## Cú pháp Thẻ

### Thẻ Cơ bản

```markdown
#dựán #côngviệc #quantrọng
```

### Thẻ Lồng nhau

Tạo phân cấp thẻ với `/`:

```markdown
#côngviệc/cuộchọp
#côngviệc/dựán
#cá nhân/sởthích/đọc
```

### Thẻ Nhiều từ

Sử dụng gạch nối hoặc gạch dưới:

```markdown
#dựán-alpha
#ghi_chú_cuộc_họp
#lập_kế_hoạch_q4
```

## Quản lý Thẻ

### Xem tất cả Thẻ

1. Mở thanh bên
2. Tìm phần "Thẻ"
3. Xem tất cả thẻ của bạn

### Đám mây Thẻ

Hình dung các thẻ được sử dụng nhiều nhất:

- Thẻ lớn hơn = nhiều ghi chú hơn
- Nhấp vào bất kỳ thẻ nào để lọc
- Xem số lượng ghi chú cho mỗi thẻ

### Đổi tên Thẻ

1. Nhấp chuột phải vào thẻ
2. Chọn "Đổi tên"
3. Nhập tên mới
4. Tất cả ghi chú cập nhật tự động

### Xóa Thẻ

1. Nhấp chuột phải vào thẻ
2. Chọn "Xóa"
3. Xác nhận xóa
4. Thẻ được xóa khỏi tất cả ghi chú

## Tìm kiếm theo Thẻ

### Bảng Thẻ

Nhấp vào thẻ trong thanh bên để lọc ghi chú

### Cú pháp Tìm kiếm

Sử dụng `tag:` trong tìm kiếm:

```
tag:côngviệc
tag:côngviệc/cuộchọp
```

### Kết hợp Thẻ

Tìm ghi chú với nhiều thẻ:

```
tag:côngviệc tag:khẩn
```

### Loại trừ Thẻ

Tìm ghi chú không có thẻ:

```
-tag:lưu_trữ
```

## Thực hành Tốt nhất cho Thẻ

### Giữ Đơn giản

- Sử dụng 3-5 thẻ cho mỗi ghi chú
- Nhất quán với việc đặt tên
- Tránh bùng nổ thẻ

### Sử dụng Phân cấp

Tổ chức các thẻ liên quan:

```
#côngviệc
  #côngviệc/cuộchọp
  #côngviệc/dựán
  #côngviệc/hạnchót

#cá nhân
  #cá nhân/sức_khỏe
  #cá nhân/tài_chính
```

### Thiết lập Quy ước

Xác định tiêu chuẩn thẻ cho bản thân:

- **Trạng thái**: `#việccầnlàm` `#đangthựchiện` `#hoanthành`
- **Ưu tiên**: `#khẩn` `#cao` `#thấp`
- **Loại**: `#cuộchọp` `#thamkhảo` `#ýtưởng`

## Gợi ý Thẻ

Khi bạn gõ `#`, Classic gợi ý các thẻ hiện có:

- Các thẻ gần đây xuất hiện đầu tiên
- Hỗ trợ khớp mờ
- Nhấn Tab để chấp nhận gợi ý

## Thống kê Thẻ

Xem sử dụng thẻ trong Cài đặt:

- Các thẻ được sử dụng nhiều nhất
- Các thẻ không được sử dụng
- Xu hướng thẻ theo thời gian

## Trường hợp Sử dụng

### Quản lý Dự án

```markdown
# Khởi động Dự án #dựán-alpha #cuộchọp #2024-01-15

Người tham dự: Nhóm Alpha
Trạng thái: #việccầnlàm
```

### Cơ sở Tri thức

```markdown
# JavaScript Closures #lậptrình #javascript #thamkhảo #nângcao

Closures là các hàm có quyền truy cập vào...
```

### Ghi chú Hàng ngày

```markdown
# 2024-01-15

- Standup buổi sáng #côngviệc #cuộchọp
- Đánh giá mã #côngviệc #pháttriển
- Phiên tập gym #cá nhân #sức_khỏe
```

### Ghi chú Đọc

```markdown
# Ghi chú Thói quen Nguyên tử #đọc #sách #năngsuất

Những điểm chính từ cuốn sách...
```

## Phím tắt

| Hành động | Phím tắt |
|----------|----------|
| Thêm Thẻ | `Cmd/Ctrl+T` |
| Tìm kiếm Thẻ | `Cmd/Ctrl+F`, sau đó gõ `tag:` |
| Hiển thị Bảng Thẻ | `Cmd/Ctrl+Shift+T` |

## Mẹo

### Đặt tên Nhất quán

Gắn bó với một quy ước:

```
✅ #ghi-chú-cuộc-họp
✅ #ghi_chú_cuộc_họp
❌ #Ghi chú Cuộc họp (không cho phép khoảng trắng)
❌ #ghiChuCuochoop (không nhất quán)
```

### Tránh Thẻ quá nhiều

Quá nhiều thẻ trở nên không thể quản lý:

```
✅ #côngviệc #khẩn #dựán-alpha
❌ #côngviệc #khẩn #quantrọng #hôm nay #thứ_hai #văn_phòng #bàn #máy_tính
```

### Dọn dẹp Định kỳ

Xem xét và hợp nhất các thẻ thường xuyên:

- Hợp nhất các thẻ tương tự
- Xóa các thẻ không sử dụng
- Cập nhật quy ước

## Tính năng Nâng cao

### Thư mục Thông minh dựa trên Thẻ

Tạo các thư mục tự động điền dựa trên thẻ:

1. Tạo thư mục mới
2. Đặt bộ lọc: `tag:dựán`
3. Tất cả ghi chú được gắn thẻ xuất hiện

### Thẻ trong YAML

Thêm thẻ vào frontmatter ghi chú:

```yaml
---
tags:
  - côngviệc
  - cuộchọp
  - dựán-alpha
---
```

### Bí danh Thẻ

Thiết lập bí danh thẻ trong Cài đặt:

- `#việccầnlàm` = `#việc` = `#hànhđộng`
- Hợp nhất các thẻ tương tự
