# apollon-demos : File upload with apollon

## Getting started

1. Install the dependencies

        npm install

2. Run apollon server with npm

        npm run start

3. Upload a file with curl

        curl localhost:3000 \
        -F operations='{ "query": "mutation ($file: Upload!) { file_upload(file: $file) }" }' \
        -F map='{ "0": ["variables.file"] }' \
        -F 0=@yarn.lock
