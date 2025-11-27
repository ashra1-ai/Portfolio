# EmailJS Template Code

Copy and paste this code into your EmailJS template editor:

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 14px; line-height: 1.6; color: #333;">
  
  <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
    <h2 style="margin: 0 0 10px 0; color: #2c3e50;">New Contact Form Message</h2>
    <p style="margin: 0; color: #666;">A message from your portfolio contact form</p>
  </div>

  <div style="margin-top: 20px; padding: 20px; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px;">
    
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="vertical-align: top; padding-right: 15px;">
          <div style="padding: 8px 12px; background-color: #4a90e2; border-radius: 50%; font-size: 24px; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; color: white;">
            👤
          </div>
        </td>
        <td style="vertical-align: top; width: 100%;">
          <div style="color: #2c3e50; font-size: 18px; font-weight: bold; margin-bottom: 5px;">
            {{name}}
          </div>
          <div style="color: #999; font-size: 12px; margin-bottom: 15px;">
            {{time}}
          </div>
        </td>
      </tr>
    </table>

    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px dashed #e0e0e0;">
      <div style="margin-bottom: 15px;">
        <strong style="color: #2c3e50; display: block; margin-bottom: 5px;">Email:</strong>
        <a href="mailto:{{from_email}}" style="color: #4a90e2; text-decoration: none;">{{from_email}}</a>
      </div>
      
      <div style="margin-bottom: 15px;">
        <strong style="color: #2c3e50; display: block; margin-bottom: 5px;">Subject:</strong>
        <span style="color: #666;">{{subject}}</span>
      </div>
      
      <div>
        <strong style="color: #2c3e50; display: block; margin-bottom: 10px;">Message:</strong>
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; color: #333; white-space: pre-wrap; line-height: 1.6;">
          {{message}}
        </div>
      </div>
    </div>

  </div>

  <div style="margin-top: 20px; padding: 15px; background-color: #e8f4f8; border-radius: 5px; text-align: center;">
    <p style="margin: 0; color: #666; font-size: 12px;">
      This email was sent from your portfolio contact form at kanishkashra.com
    </p>
  </div>

</div>
```

## How to Use This Template

1. **Go to EmailJS Dashboard** → **Email Templates**
2. **Click on your template** (or create a new one)
3. **In the template editor**, switch to **HTML mode** (if available)
4. **Replace the entire template content** with the code above
5. **Make sure these variables are set in the template:**
   - `{{name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
   - `{{time}}` - Timestamp
6. **Save the template**

## Template Features

✅ **Clean, professional design**  
✅ **Shows all contact form fields** (name, email, subject, message)  
✅ **Clickable email link** (you can reply directly)  
✅ **Timestamp included**  
✅ **Responsive and readable**  
✅ **Branded footer**  

This template will display all the information from your contact form in a nice, organized format!

