# Start new project 
    npx create-expo app --template

# Fonts
    npx expo install expo-font @expo-google-fonts/roboto

# Install gluestack
    npm install @gluestack-ui/themed@1.1.34 @gluestack-style/react@1.0.57 @gluestack-ui/config@1.1.19 --legacy-peer-deps
    npx expo install react-native-svg

# Create folder theme config
    npx gluestack-ui-scripts eject-theme

# install SVG Transformer
    npm install --save-dev react-native-svg-transformer