FROM mcr.microsoft.com/openjdk/jdk:17-azurelinux AS build

WORKDIR /app

RUN tdnf install -y tar gzip && tdnf clean all

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline

COPY src src

RUN ./mvnw clean package -DskipTests


FROM mcr.microsoft.com/openjdk/jdk:17-azurelinux

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8081

ENTRYPOINT ["java", "-jar", "app.jar"]