# Steps

The following steps migrated the application to the standalone API syntax.
You can take a look at the [before](https://github.com/timdeschryver/ng-standalone-migration/tree/before) branch for the initial state of the application.
Most of the work was done by the schematic (in Angular v15.2), but some manual changes were required.
This was mostly to update the tests.

The schematic are 3 migrations to run.
After each migration I updated the code and tests to make sure everything was working as expected.
I realized that by doing this, I was fixing a couple of issues that would've been fixed by the next migration (for example, updating to the AppComponent and a ChildComponent).

That's why I also tried and reexecuted the migrations from the start.
See this result in the [after](https://github.com/timdeschryver/ng-standalone-migration/tree/after) branch([commit](https://github.com/timdeschryver/ng-standalone-migration/commit/05387787085ff9f7792c167d0cde8c45f7cd9569)).
This time, I only had to add the child component's module to the `AppComponent`, the rest was done by the schematics.
Of course, I also had manually update the TestBed.

## 1. Standalone components (and directives and pipes)

> commit: https://github.com/timdeschryver/ng-standalone-migration/commit/d32df876bebc4f1824589bca14799cc27d6ff602

```bash
npx ng generate @angular/core:standalone
Convert all components, directives and pipes to standalone
```

Manual changes:

- A child component referenced in a Route was not migrated
- Update TestBed: move standalone components/directives/pipes from `declarations` to `imports`

Notes:

- AppComponent is not migrated

## 2. Remove NgModules

> commit: https://github.com/timdeschryver/ng-standalone-migration/commit/c74471ae5b9627ab73ed0e163600834d4d51f85d

```bash
npx ng generate @angular/core:standalone
Remove unnecessary NgModule classes
```

Manual changes:

- Update TestBed: remove deleted NgModules
- Commented a child component in `AppComponent` (this will be fixed in the next migration)

## 3. Migrate to bootstrapApplication

> commit: https://github.com/timdeschryver/ng-standalone-migration/commit/16c649d64130741ea75e4d35517ffd6b5b80cdc8

```bash
npx ng generate @angular/core:standalone
Bootstrap the application using standalone APIs
```

Manual changes:

- Readded the child component that was removed in the previous step

## 4. Remove AppModule

> commit: https://github.com/timdeschryver/ng-standalone-migration/commit/c05ca76aad7717e303037e33c269602627ab9720

```bash
npx ng generate @angular/core:standalone
Remove unnecessary NgModule classes
```

## 5. Migrate to provideRouter

> commit: https://github.com/timdeschryver/ng-standalone-migration/commit/528661c9cef1e9f3bf5cb83ff6571c96c4ae8164

This is not an automatic migration.

## 6. Migrate to provideHttpClient

> commit: https://github.com/timdeschryver/ng-standalone-migration/commit/655217f3f528fc7db83515cfce59275043dd6183

This is not an automatic migration.

## 7. Migrate to functional guards

> commit: https://github.com/timdeschryver/ng-standalone-migration/commit/6b1977d24e9770871f432b0eaa0e24efd94d41fe

This is not an automatic migration.
