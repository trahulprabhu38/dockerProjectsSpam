FROM ubuntu:latest

# Update and install Apache2
RUN apt-get update && apt-get install -y apache2

# Expose port 80
EXPOSE 80

# Start Apache without using sudo
CMD ["apache2ctl", "-D", "FOREGROUND"]
 