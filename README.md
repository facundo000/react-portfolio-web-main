## Portfolio web

esto es lo que dice en "building" de netlify: :06:46 PM: $ npm run build
1:06:46 PM: > portfolio-web-fg@0.1.0 build
1:06:46 PM: > react-scripts build
1:06:47 PM: Creating an optimized production build...
1:06:50 PM: One of your dependencies, babel-preset-react-app, is importing the
1:06:50 PM: "@babel/plugin-proposal-private-property-in-object" package without
1:06:50 PM: declaring it in its dependencies. This is currently working because
1:06:50 PM: "@babel/plugin-proposal-private-property-in-object" is already in your
1:06:50 PM: node_modules folder for unrelated reasons, but it may break at any time.
1:06:50 PM: babel-preset-react-app is part of the create-react-app project, which
1:06:50 PM: is not maintianed anymore. It is thus unlikely that this bug will
1:06:50 PM: ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
1:06:50 PM: your devDependencies to work around this error. This will make this message
1:06:50 PM: go away.
1:07:26 PM: 
1:07:26 PM: Treating warnings as errors because process.env.CI = true.
1:07:26 PM: Most CI servers set it automatically.
1:07:26 PM: 
1:07:26 PM: Failed to compile.
1:07:26 PM: 
1:07:26 PM: Warning
1:07:26 PM: (81:13) autoprefixer: end value has mixed support, consider using flex-end instead
1:07:26 PM: [eslint]
1:07:26 PM: src/App.jsx
1:07:26 PM:   Line 8:8:  "Review" is defined but never used  no-unused-vars
1:07:26 PM: src/components/Footer/Footer.jsx
1:07:26 PM:   Line 11:11:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
1:07:26 PM: src/components/Header/CTA.jsx
1:07:26 PM:   Line 9:13:  Using target="_blank" without rel="noreferrer" (which implies rel="noopener") is a security risk in older browsers: see https://mathiasbynens.github.io/rel-noopener/#recommendations  react/jsx-no-target-blank
1:07:26 PM: src/components/Header/Header.jsx
1:07:26 PM:   Line 14:9:  "changeLanguage" is assigned a value but never used  no-unused-vars
1:07:26 PM: src/components/Nav/Nav.jsx
1:07:26 PM:   Line 1:17:  "useEffect" is defined but never used                                                                                                                                                                                                                                                                                                                              no-unused-vars
1:07:26 PM:   Line 7:9:   "TbStars" is defined but never used                                                                                                                                                                                                                                                                                                                                no-unused-vars
1:07:26 PM:   Line 19:7:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
1:07:26 PM: ​
1:07:26 PM: "build.command" failed                                        
1:07:26 PM: ────────────────────────────────────────────────────────────────
1:07:26 PM: ​
1:07:26 PM:   Error message
1:07:26 PM:   Command failed with exit code 1: npm run build (https://ntl.fyi/exit-code-1)
1:07:26 PM: ​
1:07:26 PM:   Error location
1:07:26 PM:   In Build command from Netlify app:
1:07:26 PM:   npm run build
1:07:26 PM: ​
1:07:26 PM:   Resolved config
1:07:26 PM:   build:
1:07:26 PM:     command: npm run build
1:07:26 PM:     commandOrigin: ui
1:07:26 PM:     publish: /opt/build/repo/build
1:07:26 PM:     publishOrigin: ui
1:07:27 PM: Failed during stage "building site": Build script returned non-zero exit code: 2
1:07:27 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
1:07:27 PM: Failing build: Failed to build site
1:07:27 PM: Finished processing build request in 1m10.104s