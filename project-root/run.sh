#!/bin/bash

echo "🚀 Starting all services..."


(cd student_service  && node server.js &)
STUDENT_PID=$!


(cd course_service  && node server.js &)
COURSE_PID=$!


(cd registration_service  && node server.js &)
REGISTRATION_PID=$!


if nginx -t 2>/dev/null; then
    echo "✅ Reloading NGINX..."
    sudo nginx -s reload 
else
    echo "🔄 Starting NGINX..."
    sudo nginx -c /home/davit/Desktop/projectroot/projectroot/project-root/nginx/nginx.conf 

fi



trap 'echo "🛑 Stopping..."; kill $STUDENT_PID $COURSE_PID $REGISTRATION_PID; sudo nginx -s stop; exit' SIGINT SIGTERM


while true; do sleep 1; done
