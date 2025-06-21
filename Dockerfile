FROM public.ecr.aws/lambda/nodejs:20

WORKDIR /var/task

ENV NODE_ENV=development

# Install Yarn manually to avoid Corepack network issues
RUN npm install -g yarn

# Copy only package files first (for caching)
COPY package.json yarn.lock ./

# Install dependencies with Yarn
RUN yarn install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Optional: include production environment file
COPY .env.production ./

# Set command to run the Lambda handler
CMD ["index.handler"]
