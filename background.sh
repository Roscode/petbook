#!/bin/bash

export MIX_ENV=prod
export PORT=4750

echo "Stopping old copy of app, if any..."

_build/prod/rel/petbook/bin/petbook stop || true

echo "Starting app..."

_build/prod/rel/petbook/bin/petbook start
