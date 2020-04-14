#  Tipaw technical test (Contact page)

## Access the Demo on heroku 
https://tipawtechnicaltest.herokuapp.com/

A pipeline is setup to deploy the app on every commit on the master branch of this repository.
## To launch production locally 
1. Install docker-compose  : https://docs.docker.com/compose/install/

2. launch terminal : 

git clone https://github.com/damioune123/tipaw_technical_test.git 

cd tipaw_technical_test

docker-compose up 

The web app frontend will be delivered at http://localhost

Note : make sure both port 80 and 27017 are available.

## To launch development setup
1. launch terminal : 

git clone https://github.com/damioune123/tipaw_technical_test.git 

cd tipaw_technical_test

2. Setup backend :

cd api && npm i

npm run start

3. Launch frontend in development mode (HBR server enabled):

cd gui && npm i

 npm run serve:dev

## Launch backend mocha unit test

cd api && npm run test
