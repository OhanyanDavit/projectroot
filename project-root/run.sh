#!/bin/bash

echo "🚀 Starting all services..."

# Запуск student_service
(cd student_service && npm install && node server.js > ../student.log 2>&1 &)
STUDENT_PID=$!

# Запуск course_service
(cd course_service && npm install && node server.js > ../course.log 2>&1 &)
COURSE_PID=$!

# Запуск registration_service
(cd registration_service && npm install && node server.js > ../registration.log 2>&1 &)
REGISTRATION_PID=$!

# Запуск или перезапуск NGINX
if nginx -t 2>/dev/null; then
    echo "✅ Reloading NGINX..."
    sudo nginx -s reload
else
    echo "🔄 Starting NGINX..."
    sudo nginx
fi

# Обработка сигналов для остановки всех сервисов
trap 'echo "🛑 Stopping..."; kill $STUDENT_PID $COURSE_PID $REGISTRATION_PID; sudo nginx -s stop; exit' SIGINT SIGTERM

# Цикл ожидания (Ctrl+C для завершения)
while true; do sleep 1; done
