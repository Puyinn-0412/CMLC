import random
import json
import gradio as gr

# --- Đọc dữ liệu từ file intents.json ---
with open("intents.json", "r", encoding="utf-8") as f:
    intents = json.load(f)

# --- Hàm xử lý câu hỏi người dùng ---
def chatbot_response(message):
    message = message.lower()
    for intent in intents["intents"]:
        for pattern in intent["patterns"]:
            if pattern.lower() in message:
                return random.choice(intent["responses"])
    return "Mình chưa hiểu rõ lắm 🥲, bạn có thể hỏi lại về các địa điểm như Lăng Cô, Đầm Lập An, hoặc Suối Voi nhé!"

# --- Giao diện Gradio ---
with gr.Blocks(theme=gr.themes.Soft(primary_hue="blue")) as demo:
    gr.Markdown(
        """
        <div style="text-align:center">
        <h1>🌊 Chatbot Du Lịch Chân Mây – Lăng Cô 🌴</h1>
        <p>Khám phá vẻ đẹp thiên nhiên và con người Chân Mây – Lăng Cô cùng trợ lý ảo thông minh!</p>
        </div>
        """
    )
    
    chatbox = gr.Chatbot(height=400)
    msg = gr.Textbox(placeholder="Nhập câu hỏi của bạn tại đây... ✍️", label="Tin nhắn")
    clear = gr.Button("Xóa hội thoại")

    def respond(message, chat_history):
        response = chatbot_response(message)
        chat_history.append(("🧍‍♂️ " + message, "🤖 " + response))
        return "", chat_history

    msg.submit(respond, [msg, chatbox], [msg, chatbox])
    clear.click(lambda: None, None, chatbox, queue=False)

# --- Chạy ứng dụng ---
if __name__ == "__main__":
    demo.launch()
