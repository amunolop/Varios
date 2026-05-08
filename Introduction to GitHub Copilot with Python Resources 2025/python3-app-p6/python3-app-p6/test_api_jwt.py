import requests

BASE_URL = 'http://localhost:5000'
LOGIN_URL = f'{BASE_URL}/login'
DATA_URL = f'{BASE_URL}/data'

# Credentials for login (must exist in db.json)
credentials = {
    'username': 'Alice',
    'password': 'securepass'
}

# 1. Login to get JWT token
login_resp = requests.post(LOGIN_URL, json=credentials)
if login_resp.status_code != 200:
    print('Login failed:', login_resp.json())
    exit(1)
token = login_resp.json()['access_token']
headers = {'Authorization': f'Bearer {token}'}
print('JWT token:', token)

# 2. GET /data (protected)
get_resp = requests.get(DATA_URL, headers=headers)
print('\nGET /data response:')
print(get_resp.status_code, get_resp.json())

# 3. POST /data (protected)
new_doc = {
    'id': 999,
    'username': 'TestUser',
    'password': 'testpass'
}
post_resp = requests.post(DATA_URL, json=new_doc, headers=headers)
print('\nPOST /data response:')
print(post_resp.status_code, post_resp.json())
