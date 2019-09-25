from flask import Flask, request, Response, jsonify, make_response, current_app, send_from_directory
import json
import numpy as np
app = Flask(__name__)

@app.route('/KerasModelHist', methods=['POST'])
@app.route('/KerasModelHist', methods=['POST'])
def happy_sad_6():
 rf=request.form
 dd = receive_image(rf)
 if dd['msg']=='Clear':
  #print(dd['inference'])
  inference = list(dd['inference'].flatten())
  inference = list(map(lambda x: str(x),inference))
  rs=jsonify({'inference':inference})
  resp = rs
 else:
  resp = Response("Error")
 resp.headers['Access-Control-Allow-Origin']='*'
 return resp
