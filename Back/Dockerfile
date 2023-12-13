FROM maven:3.9.1-eclipse-temurin-11-alpine
WORKDIR /app
COPY ./viajerasapp-api ./viajerasapp-api
COPY ./viajerasapp-boot ./viajerasapp-boot
COPY ./viajerasapp-model ./viajerasapp-model
COPY ./viajerasapp-ws ./viajerasapp-ws
COPY pom.xml .
EXPOSE 33333
RUN mvn install
WORKDIR /app/viajerasapp-boot
CMD mvn spring-boot:run