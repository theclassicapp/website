# Ghi chú con

Ghi chú con cho phép bạn tạo các ghi chú lồng nhau, phân cấp trong Classic. Tổ chức các chủ đề phức tạp thành các phần dễ quản lý.

## Ghi chú con là gì?

Ghi chú con là các ghi chú trong ghi chú — một cách để tạo cấu trúc nội dung phân cấp.

### Lợi ích

- **Tổ chức**: Chia các chủ đề phức tạp thành các phần nhỏ hơn
- **Lồng nhau**: Tạo nhiều cấp độ phân cấp
- **Điều hướng**: Dễ dàng điều hướng giữa các ghi chú liên quan
- **Linh hoạt**: Mở rộng và thu gọn theo cần

## Tạo Ghi chú con

### Phương pháp 1: Thụt lề

Tạo ghi chú con bằng cách thụt lề nội dung dưới một ghi chú cha:

1. Tạo một ghi chú cha
2. Tạo một ghi chú mới
3. Kéo ghi chú mới vào ghi chú cha
4. Nó trở thành ghi chú con

### Phương pháp 2: Menu Ngữ cảnh

1. Nhấp chuột phải vào một ghi chú
2. Chọn "Ghi chú con Mới"
3. Một ghi chú lồng nhau được tạo

### Phương pháp 3: Phím tắt

1. Chọn một ghi chú
2. Nhấn `Cmd/Ctrl+Shift+N`
3. Một ghi chú con được tạo

## Quản lý Ghi chú con

### Mở rộng & Thu gọn

Nhấp vào mũi tên bên cạnh ghi chú có ghi chú con:

- **Mở rộng**: Hiển thị tất cả ghi chú lồng nhau
- **Thu gọn**: Ẩn ghi chú lồng nhau

### Điều hướng

- Nhấp để mở một ghi chú con
- Sử dụng các phím mũi tên để điều hướng phân cấp
- Breadcrumb hiển thị vị trí của bạn

### Di chuyển Ghi chú con

Kéo và thả để tổ chức lại:

1. Nhấp và giữ ghi chú con
2. Kéo đến vị trí mới
3. Thả để định vị lại

### Chuyển thành Ghi chú Chính

Nâng cấp ghi chú con lên cấp cao nhất:

1. Nhấp chuột phải vào ghi chú con
2. Chọn "Di chuyển lên Gốc"
3. Ghi chú trở thành ghi chú chính

## Độ sâu Ghi chú con

Classic hỗ trợ nhiều cấp độ lồng nhau:

```
📁 Dự án
  📄 Tổng quan
  📁 Nghiên cứu
    📄 Phỏng vấn Người dùng
    📄 Kết quả Khảo sát
    📁 Phân tích
      📄 Phát hiện Chính
      📄 Khuyến nghị
  📁 Lập kế hoạch
    📄 Dòng thời gian
    📄 Tài nguyên
```

### Thực hành Tốt nhất

- **Giới hạn độ sâu**: Tối đa 3-4 cấp độ để rõ ràng
- **Nhóm logic**: Nhóm nội dung liên quan với nhau
- **Đặt tên rõ ràng**: Sử dụng tên mô tả cho ghi chú con

## Trường hợp Sử dụng

### Tài liệu Dự án

```
Dự án Alpha
├── Yêu cầu
├── Kiến trúc
│   ├── Frontend
│   ├── Backend
│   └── Database
├── Ghi chú Cuộc họp
└── Báo cáo Tiến độ
```

### Cơ sở Tri thức

```
Lập trình
├── JavaScript
│   ├── Cơ bản
│   ├── Nâng cao
│   └── Thực hành Tốt nhất
├── Python
│   ├── Cơ bản
│   └── Thư viện
└── Tài nguyên
```

### Ghi chú Học tập

```
Sinh học 101
├── Cấu trúc Tế bào
│   ├── Màng
│   ├── Nhân
│   └── Bào quan
├── Di truyền
│   ├── DNA
│   └── RNA
└── Tiến hóa
```

## Liên kết với Ghi chú con

### Liên kết ngược

Ghi chú con tự động tạo liên kết ngược đến ghi chú cha:

- Xem phần "Tham chiếu Được liên kết"
- Điều hướng giữa các ghi chú liên quan
- Hiểu mối quan hệ ghi chú

### Wikilinks

Liên kết đến ghi chú con từ bất kỳ đâu:

```markdown
Xem [[Dự án/Nghiên cứu/Phân tích]] để biết chi tiết.
```

## Mẹo

### Quy ước Đặt tên

Sử dụng đặt tên rõ ràng, nhất quán:

```
✅ Tốt:
Dự án/Yêu cầu/Chức năng
Dự án/Yêu cầu/Phi-Chức năng

❌ Tránh:
Dự án/yc/func
Dự án/rq/nf
```

### Điều hướng Breadcrumb

Sử dụng breadcrumb để hiểu vị trí của bạn:

```
Dự án > Nghiên cứu > Phân tích
```

### Tìm kiếm

Tìm kiếm bao gồm ghi chú con tự động:

- Tìm nội dung trên tất cả các cấp độ
- Lọc theo độ sâu ghi chú
- Điều hướng nhanh

### Mẫu

Áp dụng mẫu cho ghi chú con:

1. Tạo ghi chú con
2. Sử dụng lệnh slash `/template`
3. Chọn mẫu

## Phím tắt

| Hành động | Phím tắt |
|----------|----------|
| Ghi chú con Mới | `Cmd/Ctrl+Shift+N` |
| Mở rộng Tất cả | `Cmd/Ctrl+Down` |
| Thu gọn Tất cả | `Cmd/Ctrl+Up` |
| Di chuyển Lên | `Opt/Alt+Up` |
| Di chuyển Xuống | `Opt/Alt+Down` |
| Nâng cấp | `Opt/Alt+Left` |
| Hạ cấp | `Opt/Alt+Right` |

## Khắc phục sự cố

### Ghi chú con Không Hiển thị

- Kiểm tra xem ghi chú cha có bị thu gọn không
- Xác minh ghi chú không bị di chuyển
- Làm mới thanh bên

### Không thể Tạo Ghi chú con

- Đảm bảo ghi chú cha tồn tại
- Kiểm tra quyền
- Thử phương pháp menu ngữ cảnh

### Mất Ghi chú con

Sử dụng tìm kiếm để tìm ghi chú bị mất:

1. Mở tìm kiếm (`Cmd/Ctrl+F`)
2. Gõ tên ghi chú
3. Xem đường dẫn đầy đủ trong kết quả
