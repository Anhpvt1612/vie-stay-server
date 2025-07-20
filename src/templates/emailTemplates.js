const REPORT_RESPONSE_TEMPLATE = `
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Phản hồi báo cáo</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .container {
      background-color: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 30px 20px;
      text-align: center;
      color: white;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 30px;
    }
    .status-badge {
      display: inline-block;
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: bold;
      color: white;
      background-color: #28a745;
    }
    .info-box {
      background-color: #f8f9fa;
      border-left: 4px solid #667eea;
      padding: 15px;
      margin: 20px 0;
      border-radius: 4px;
    }
    .footer {
      background-color: #f8f9fa;
      padding: 20px;
      text-align: center;
      color: #666;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔔 Phản hồi báo cáo từ VieStay</h1>
    </div>
    
    <div class="content">
      <p>Xin chào <strong>{{userFullname}}</strong>,</p>
      
      <p>Chúng tôi đã xử lý báo cáo của bạn và có phản hồi như sau:</p>
      
      <div class="info-box">
        <h3>📋 Thông tin báo cáo</h3>
        <ul style="list-style: none; padding: 0;">
          <li><strong>Mã báo cáo:</strong> #{{reportId}}</li>
          <li><strong>Loại báo cáo:</strong> {{reportType}}</li>
          <li><strong>Nội dung:</strong> {{reportMessage}}</li>
          <li><strong>Ngày gửi:</strong> {{reportDate}}</li>
          <li><strong>Bài đăng:</strong> <a href="{{postUrl}}">{{postTitle}}</a></li>
        </ul>
      </div>
      
      <div class="info-box">
        <h3>✅ Kết quả xử lý</h3>
        <p><strong>Trạng thái:</strong> <span class="status-badge">{{status}}</span></p>
        <p><strong>Ghi chú từ admin:</strong></p>
        <p style="background-color: white; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
          {{adminNote}}
        </p>
      </div>
      
      <p>Cảm ơn bạn đã giúp VieStay cải thiện chất lượng dịch vụ!</p>
      
      <p>Nếu bạn có thắc mắc, vui lòng liên hệ với chúng tôi.</p>
    </div>
    
    <div class="footer">
      <p>Email này được gửi tự động, vui lòng không trả lời.</p>
      <p>&copy; 2025 VieStay. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

module.exports = {
  REPORT_RESPONSE_TEMPLATE,
};
