#!/bin/bash
# se si ha ufw > ufw allow 5000
uwsgi --socket 0.0.0.0:5000 --protocol=http -w wsgi:app --enable-threads

