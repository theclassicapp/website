# Sơ đồ Mermaid

Tạo sơ đồ đẹp trực tiếp trong ghi chú của bạn sử dụng cú pháp Mermaid.

## Sử dụng Cơ bản

Để tạo sơ đồ Mermaid, sử dụng khối mã với định danh ngôn ngữ `mermaid`:

```mermaid
graph TD
    A[Bắt đầu] --> B[Xử lý]
    B --> C[Kết thúc]
```

## Biểu đồ Luồng

```mermaid
flowchart TD
    A[Bắt đầu] --> B{Có hoạt động không?}
    B -->|Có| C[Tuyệt vời!]
    B -->|Không| D[Gỡ lỗi]
    D --> B
```

## Sơ đồ Trình tự

```mermaid
sequenceDiagram
    participant Người dùng
    participant Trình duyệt
    participant Máy chủ

    Người dùng->>Trình duyệt: Nhấp nút
    Trình duyệt->>Máy chủ: Gửi yêu cầu
    Máy chủ-->>Trình duyệt: Trả về dữ liệu
    Trình duyệt-->>Người dùng: Hiển thị kết quả
```

## Sơ đồ Lớp

```mermaid
classDiagram
    class GhiChu {
        +String tiêuDe
        +String noiDung
        +DateTime ngayTao
        +luu()
    }
    class The {
        +String ten
        +themGhiChu()
    }
    GhiChu "1" -- "*" The
```

## Sơ đồ Trạng thái

```mermaid
stateDiagram-v2
    [*] --> BanNhac
    BanNhac --> DangThucHien : Bắt đầu chỉnh sửa
    DangThucHien --> DangDanhGia : Hoàn thành
    DangDanhGia --> DaXuatBan : Phê duyệt
    DangDanhGia --> BanNhac : Từ chối
    DaXuatBan --> [*]
```

## Biểu đồ Gantt

```mermaid
gantt
    title Dòng thời gian Dự án
    dateFormat  YYYY-MM-DD
    section Lập kế hoạch
        Nghiên cứu     :a1, 2024-01-01, 30d
        Thiết kế       :2024-01-15, 20d
    section Phát triển
        Backend        :2024-02-01, 45d
        Frontend       :2024-02-15, 30d
    section Kiểm tra
        QA Testing     :2024-03-01, 15d
```

## Biểu đồ Tròn

```mermaid
pie showPets
    "Chó" : 386
    "Mèo" : 85
    "Thỏ" : 15
```

## Sơ đồ Tư duy

```mermaid
mindmap
  root((Classic))
    TinhNang((Tính năng))
      TrinhSoanThao((Trình soạn thảo))
      ToChuc((Tổ chức))
    LoiIch((Lợi ích))
      QuyenRiengTu((Quyền riêng tư))
      TocDo((Tốc độ))
```

## Mẹo

### Tạo kiểu

- Sử dụng subgraphs để tổ chức các sơ đồ phức tạp
- Thêm kiểu và chủ đề để nhất quán về mặt hình ảnh
- Giữ sơ đồ đơn giản và dễ đọc

### Hiệu suất

- Các sơ đồ lớn có thể làm chậm trình soạn thảo
- Cân nhắc chia các sơ đồ phức tạp thành các sơ đồ nhỏ hơn
- Sử dụng `%%{init: ... }%%` để cấu hình

### Các vấn đề Phổ biến

**Sơ đồ không hiển thị?**
- Kiểm tra cú pháp Mermaid
- Đảm bảo khối mã có ngôn ngữ `mermaid`
- Tìm lỗi cú pháp trong xem trước

**Sơ đồ quá nhỏ/lớn?**
- Sử dụng `%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px' }}}%%` để điều chỉnh kích thước

## Tài nguyên

- [Tài liệu Mermaid](https://mermaid.js.org/)
- [Trình soạn thảo trực tiếp Mermaid](https://mermaid.live/)
- [GitHub Mermaid](https://github.com/mermaid-js/mermaid)
