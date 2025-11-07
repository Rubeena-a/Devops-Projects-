from flask import Flask, jsonify, request
app = Flask(__name__)


@app.route("/")
def home():
    return "Hello from DevOps CI/CD sample app"

@app.route("/health")
def health():
    return jsonify(status="ok")

@app.route("/compute")
def compute():
    n = int(request.args.get("n", 100000))
    s = 0
    for i in range(n):
        s += i
    return jsonify(result=s)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
