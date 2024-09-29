import number_base_converter as convert
from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/',methods=['POST'])
def convert_num():
    data = request.json
    
    input_number = data.get('input_num', None)
    source_base = data.get('source_base', None)
    target_base = data.get('target_base', None)

    converted_num  = convert.convert_number(input_number,source_base,target_base)

    result = f"Processed {input_number}, {source_base}, and {target_base}"
    print(result)
    print("Converted number is:",converted_num)

    response = {'converted_num':converted_num}

    return jsonify(response), 200


if __name__ == '__main__':
    app.run(debug=True)




