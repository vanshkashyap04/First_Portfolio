from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    # Here you can add logic to save or email the message
    print(f"New message from {name} ({email}): {message}")

    return jsonify({'status': 'success', 'message': 'Thank you for contacting me!'}), 200

if __name__ == '__main__':
    app.run(debug=True)
